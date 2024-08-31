'use client'
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Footer_pol from '../footer';
import NavBar02 from '@/components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RealEstateChart.css';

// Rejestracja elementów wykresu
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Typy dla danych JSON
type PropertyData = {
    name: string;
    address: string;
    numberOfRooms: string;
    floorSize: string;
    pricePerMeter: string;
    floor: string | null;
    price: string;
    url: string;
};

// Typ dla danych statystycznych
type DailyStats = {
    date: string;
    averagePricePerMeter: number;
    numberOfListings: number;
};

export default function RealEstateChart() {
    const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
    const [filteredStats, setFilteredStats] = useState<DailyStats[]>([]);
    const [selectedDateRange, setSelectedDateRange] = useState<string>('all');
    const [numberOfRooms, setNumberOfRooms] = useState<number | ''>(''); // Filtr liczby pokoi
    const [minFloorSize, setMinFloorSize] = useState<number | ''>(''); // Minimalna powierzchnia
    const [maxFloorSize, setMaxFloorSize] = useState<number | ''>(''); // Maksymalna powierzchnia

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/list-files');
                const files = await response.json();

                const allStats: DailyStats[] = [];

                for (const fileName of files) {
                    const response = await fetch(`/DANE/${fileName}`);

                    if (!response.ok) {
                        throw new Error(`Plik ${fileName} nie został znaleziony`);
                    }

                    const result: PropertyData[] = await response.json();

                    // Filtracja danych na podstawie liczby pokoi i powierzchni
                    const filteredData = result.filter(item => {
                        // Parsowanie liczby pokoi (np. "1 pokój" -> 1)
                        const roomNumber = parseInt(item.numberOfRooms.match(/\d+/)?.[0] || '0');

                        // Parsowanie powierzchni (np. "33.68 m²" -> 33.68)
                        const floorSize = parseFloat(item.floorSize.replace(/[^0-9.,]/g, '').replace(',', '.'));

                        // Sprawdzanie filtrów
                        const roomCondition = numberOfRooms ? roomNumber === numberOfRooms : true;
                        const floorCondition = (!minFloorSize || floorSize >= minFloorSize) && (!maxFloorSize || floorSize <= maxFloorSize);

                        // Sprawdzenie, czy cena za metr ma poprawny format (ignorujemy wpisy bez ceny za metr)
                        const isValidPricePerMeter = item.pricePerMeter.includes('zł/m²');

                        return roomCondition && floorCondition && isValidPricePerMeter;
                    });

                    const totalListings = filteredData.length;
                    const totalPricePerMeter = filteredData.reduce((acc, item) => {
                        // Parsowanie ceny za metr kwadratowy, jeśli istnieje
                        const pricePerMeterNumber = parseFloat(item.pricePerMeter.replace(/[^0-9.,]/g, '').replace(',', '.'));

                        return acc + (pricePerMeterNumber || 0);
                    }, 0);

                    const averagePricePerMeter = totalListings > 0 ? totalPricePerMeter / totalListings : 0;

                    const date = fileName.replace('mieszkania_krakow_', '').replace('.json', '');

                    allStats.push({
                        date: date,
                        averagePricePerMeter: averagePricePerMeter,
                        numberOfListings: totalListings,
                    });
                }

                const sortedStats = allStats.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

                setDailyStats(sortedStats);
                setFilteredStats(sortedStats);

            } catch (error) {
                console.error('Błąd podczas wczytywania danych:', error);
            }
        };

        fetchData();
    }, [numberOfRooms, minFloorSize, maxFloorSize]);

    useEffect(() => {
        filterStatsByDateRange(selectedDateRange);
    }, [selectedDateRange, dailyStats]);

    const filterStatsByDateRange = (range: string) => {
        const now = new Date();
        let filtered: DailyStats[];

        switch (range) {
            case 'week':
                const oneWeekAgo = new Date(now);
                oneWeekAgo.setDate(now.getDate() - 7);
                filtered = dailyStats.filter(stat => new Date(stat.date) >= oneWeekAgo);
                break;
            case 'month':
                const oneMonthAgo = new Date(now);
                oneMonthAgo.setMonth(now.getMonth() - 1);
                filtered = dailyStats.filter(stat => new Date(stat.date) >= oneMonthAgo);
                break;
            case 'year':
                const oneYearAgo = new Date(now);
                oneYearAgo.setFullYear(now.getFullYear() - 1);
                filtered = dailyStats.filter(stat => new Date(stat.date) >= oneYearAgo);
                break;
            default:
                filtered = dailyStats;
        }

        setFilteredStats(filtered);
    };

    const handleDateRangeChange = (range: string) => {
        setSelectedDateRange(range);
    };

    const chartData = {
        labels: filteredStats.map(stat => stat.date),
        datasets: [
            {
                label: 'Średnia cena za m² (PLN)',
                data: filteredStats.map(stat => stat.averagePricePerMeter),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
            // {
            //     label: 'Liczba ofert',
            //     data: filteredStats.map(stat => stat.numberOfListings),
            //     borderColor: 'rgba(255, 99, 132, 1)',
            //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
            //     fill: false,
            //     yAxisID: 'y1',
            // }
        ],
    };

    return (
        <main>
            <NavBar02 />
            <div className="real-estate-container">
                <div className="real-estate-intro-section">
                    <div className="real-estate-intro-text">
                        <h1>Średnia cena nieruchomości na dzień</h1>
                        <p>Analiza średniej ceny nieruchomości na m² dla poszczególnych dni.</p>
                    </div>
                </div>
                <div className="real-estate-content">
                    <div className="real-estate-filter-section">
                        <h3>Filtruj dane</h3>
                        <div className="filter-controls">
                            <label>
                                Liczba pokoi:
                                <select value={numberOfRooms} onChange={(e) => setNumberOfRooms(parseInt(e.target.value) || '')}>
                                    <option value="">Wszystkie</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5+</option>
                                </select>
                            </label>
                            <label>
                                Minimalna powierzchnia (m²):
                                <input
                                    type="number"
                                    value={minFloorSize}
                                    onChange={(e) => setMinFloorSize(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                />
                            </label>
                            <label>
                                Maksymalna powierzchnia (m²):
                                <input
                                    type="number"
                                    value={maxFloorSize}
                                    onChange={(e) => setMaxFloorSize(e.target.value === '' ? '' : parseFloat(e.target.value))}
                                />
                            </label>
                        </div>
                        <div className="button-group">
                            <button onClick={() => handleDateRangeChange('week')} className={selectedDateRange === 'week' ? 'active' : ''}>1W</button>
                            <button onClick={() => handleDateRangeChange('month')} className={selectedDateRange === 'month' ? 'active' : ''}>1M</button>
                            <button onClick={() => handleDateRangeChange('year')} className={selectedDateRange === 'year' ? 'active' : ''}>1Y</button>
                            <button onClick={() => handleDateRangeChange('all')} className={selectedDateRange === 'all' ? 'active' : ''}>ALL</button>
                        </div>
                    </div>
                    <div className="real-estate-chart-section">
                        <Line data={chartData} options={{
                            scales: {
                                // y: {
                                //     title: {
                                //         display: true,
                                //         text: 'Średnia cena za m² (PLN)'
                                //     }
                                // },
                                // y1: {
                                //     title: {
                                //         display: true,
                                //         text: 'Liczba ofert'
                                //     },
                                //     position: 'right'
                                // }
                            }
                        }} />
                    </div>
                </div>
            </div>
            <Footer_pol />
        </main>
    );
}
