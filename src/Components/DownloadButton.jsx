// import { saveAs } from 'file-saver';

// function DownloadButton() {
//   const handleDownload = () => {
//     const fileUrl = 'https://i.pinimg.com/736x/c6/fd/ac/c6fdacd1d06e4e5bddb41ec510193905.jpg';
//     saveAs(fileUrl, 'legenda.jpg');
//   };

//   return (
//     <button className='downloadBtn'  onClick={handleDownload}>
//       Pobierz szczegóły
//     </button>
//   );
// }

// export default DownloadButton;


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


