import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../api';
import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

export default function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({});
  const [error, setError] = useState(false);

  Modal.setAppElement('#root');

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getData() {
      try {
        const data = await fetchImages(query, page);

        if (data.length === 0) {
          setError(true);
        }

        setImages(prevData => {
          return [...prevData, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [page, query]);

  const handleSubmit = searchValue => {
    if (!searchValue) {
      toast.error('Please, enter the value');

      return;
    }

    setLoading(true);
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = imageContent => {
    setIsOpen(true);
    setContent(imageContent);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSubmit} value={images} />
      {images.length > 0 && <ImageGallery images={images} onOpen={openModal} />}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          imageContent={content}
        />
      )}
      {error && <ErrorMessage />}
    </>
  );
}
