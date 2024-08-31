import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Rejestracja elementów wykresu
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Typy dla danych JSON
type PropertyData = {
    name: string;
    address: string;
    locality: string;
    numberOfRooms: number;
    floorSize: number;
    price: number;
    pricePerMeter: number;
};

const RealEstateChart: React.FC = () => {
    const [data, setData] = useState<PropertyData[]>([]);
    const [filteredData, setFilteredData] = useState<PropertyData[]>([]);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [localityFilter, setLocalityFilter] = useState<string>('');

    // Wczytywanie danych z pliku JSON
    useEffect(() => {
        // Można również użyć fetch() lub innej metody do pobierania danych z backendu
        const fetchData = async () => {
            try {
                const response = await fetch('/path/to/your/json/file.json');
                const result = await response.json();
                setData(result);
                setFilteredData(result);  // Domyślnie nie filtrowane
            } catch (error) {
                console.error('Błąd podczas wczytywania danych:', error);
            }
        };

        fetchData();
    }, []);

    // Funkcja filtrująca dane na podstawie ceny i lokalizacji
    const filterData = () => {
        let newData = [...data];

        if (minPrice !== null) {
            newData = newData.filter(item => item.price >= minPrice);
        }

        if (maxPrice !== null) {
            newData = newData.filter(item => item.price <= maxPrice);
        }

        if (localityFilter) {
            newData = newData.filter(item => item.locality.toLowerCase().includes(localityFilter.toLowerCase()));
        }

        setFilteredData(newData);
    };

    // Obsługa zmian w polach filtrów
    useEffect(() => {
        filterData();
    }, [minPrice, maxPrice, localityFilter]);

    // Przygotowanie danych do wykresu
    const chartData = {
        labels: filteredData.map(item => item.name),
        datasets: [
            {
                label: 'Cena (PLN)',
                data: filteredData.map(item => item.price),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.1,
            },
            {
                label: 'Cena za m² (PLN)',
                data: filteredData.map(item => item.pricePerMeter),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    return (
        <div>
            <h2>Wykres cen nieruchomości</h2>
            <div>
                <label>
                    Minimalna cena:
                    <input type="number" value={minPrice || ''} onChange={e => setMinPrice(e.target.value ? parseFloat(e.target.value) : null)} />
                </label>
                <label>
                    Maksymalna cena:
                    <input type="number" value={maxPrice || ''} onChange={e => setMaxPrice(e.target.value ? parseFloat(e.target.value) : null)} />
                </label>
                <label>
                    Lokalizacja:
                    <input type="text" value={localityFilter} onChange={e => setLocalityFilter(e.target.value)} />
                </label>
            </div>
            <Line data={chartData} />
        </div>
    );
};

export default RealEstateChart;
