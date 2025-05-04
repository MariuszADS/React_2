import { saveAs } from 'file-saver';

function DownloadButton() {
  const handleDownload = () => {
    const fileUrl = '../downloads/legenda inż (1).pdf';
    saveAs(fileUrl, 'obrazek.jpg');
  };

  return (
    <button onClick={handleDownload}>
      Pobierz obrazek
    </button>
  );
}

export default DownloadButton;
