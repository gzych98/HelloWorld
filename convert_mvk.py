import ffmpeg

def convert_mkv_to_mp4(input_file, output_file):
    try:
        # Uruchomienie konwersji za pomocą ffmpeg
        ffmpeg.input(input_file).output(output_file, vcodec='libx264', acodec='aac').run()
        print(f'Successfully converted {input_file} to {output_file}')
    except ffmpeg.Error as e:
        print(f'Error occurred: {e.stderr.decode()}')
    except Exception as e:
        print(f'An unexpected error occurred: {e}')

# Przykład użycia
input_file = r'C:\Users\Grzesiek\Desktop\WWW\demo1\demo\public\edycja_kafelkow.mkv'
output_file = r'C:\Users\Grzesiek\Desktop\WWW\demo1\demo\src\assets\output.mp4'
convert_mkv_to_mp4(input_file, output_file)
