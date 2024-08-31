import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const directoryPath = path.join(process.cwd(), 'public', 'DANE'); // Ścieżka do folderu z plikami JSON

        // Czytanie plików z katalogu
        const files = await readdir(directoryPath);

        // Filtrowanie tylko plików JSON
        const jsonFiles = files.filter(file => file.endsWith('.json'));

        return NextResponse.json(jsonFiles);
    } catch (error) {
        return NextResponse.json({ message: 'Unable to read directory', error }, { status: 500 });
    }
}
