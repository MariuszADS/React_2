import { saveAs } from 'file-saver';

function DownloadButton() {
  const handleDownload = async () => {
    console.log('Pobieranie pliku lokalnego...');

    try {
      const response = await fetch('/public/downloads/legenda_metro_pociac.pdf');
      if (!response.ok) throw new Error('Nie udało się pobrać lokalnego pliku');

      const blob = await response.blob();
      saveAs(blob, 'legenda_inż.pdf');
    } catch (error) {
      console.error(error);
      alert('Wystąpił błąd przy pobieraniu pliku.');
    }
  };

  return (
    <button onClick={handleDownload} className="downloadBtn">
      Pobierz
    </button>
  );
}

export default DownloadButton;


