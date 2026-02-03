import { saveAs } from 'file-saver';
import React from 'react';
import {useTranslation} from "react-i18next" 
// import { useTranslation } from 'react-i18next';

function DownloadButton() {

  const {t} = useTranslation()

  const handleDownload = async () => {
    console.log('Pobieranie pliku lokalnego...');

    try {
      const response = await fetch('/downloads/legenda_metro_pociac.pdf');
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
      {t("download_btn")}
    </button>
  );
}

export default DownloadButton;


