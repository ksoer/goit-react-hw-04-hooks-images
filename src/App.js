
import { useState, useEffect } from 'react';

import st from './components/styles.module.css';

import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button'

import fetchDataApi from './services/fetchDataApi';


function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      try {
        const request = await fetchDataApi(query, page);
        if (request.length === 0) {
          return setError(`No results were found for ${query}!`);
        }
       setImages(prevImages => [...prevImages, ...request]);
      } catch (error)
      {
        setError('Something went wrong. Try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

const searchImages = newSearch => {
    setQuery(newSearch);
    setImages([]);
    setPage(1);
    setError(null);
    setIsLoading(true);
  };

const onLoadMore = () => {
    setIsLoading(true);
    setPage(prevPage => prevPage + 1);
    scrollPage();
  };

  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 160,
        behavior: 'smooth',
      });
    }, 800);
  };


 return (
      <div className={st.App}>
        <Searchbar  onHandleSubmit={searchImages} />

        {error && <p>{error.message}</p>}

        {images.length > 0 && (
          <ImageGallery
            images={images}
            onOpenModal={onOpenModal}
          />
        )}

        {isLoading && <Loader />}

         {!isLoading && images.length >= 12 && !error && (
        <Button onLoadMore={onLoadMore} />
      )}

        {showModal && (
          <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL}>
            
          </Modal>
        )}
      </div>
    );
}

export default App;


// export class App extends Component {
//   state = {
//     gallery: [],
//     searchQuery: '',
//     page: 1,
//     showModal: false,
//     showLoader: false,
//     error: null,
//     largeImage: {},
//     total: 0,
//   };

//   componentDidMount() {
//     this.setState({ showLoader: true });
//     this.fetchGallary();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.searchQuery;
//     const naxtQuery = this.state.searchQuery;
//     if (prevQuery !== naxtQuery) {
//       this.fetchGallary();
//     }
//   }

//   fetchGallary = () => {
//     const { searchQuery, page } = this.state;
//     this.setState({ showLoader: true });

//     fetchDataApi(searchQuery, page)
//       .then(({ hits, total }) => {
//         this.setState(prevState => ({
//           gallery: [...prevState.gallery, ...hits],
//           page: prevState.page + 1,
//           total,
//         }));
//         this.scrollToDown();
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ showLoader: false }));
//   };

//   scrollToDown = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   };

//   handleFormSubmit = searchQuery => {
//     if (this.state.searchQuery === searchQuery) {
//       return;
//     }
//     this.setState({ searchQuery, gallery: [], page: 1 });
//   };

//   toggleModal = () => {
//     this.setState(prevState => ({
//       showModal: !prevState.showModal,
//     }));
//   };

//   handleOpenPicture = largeImage => {
//     this.setState({ largeImage });
//     this.toggleModal();
//   };

//   showLoadMore = () => {
//     const { total, page } = this.state;
//     return Math.ceil(total / 12) !== page - 1;
//   };

//   render() {
//     const { error, showLoader, showModal, gallery, largeImage } = this.state;
//     const showLoadMore = this.showLoadMore();
//     return (
//       <div className={st.App}>
//         <Searchbar onSubmit={this.handleFormSubmit} />

//         {error && <p>{error.message}</p>}

//         {gallery.length > 0 && (
//           <ImageGallery
//             gallery={gallery}
//             onOpenPicture={this.handleOpenPicture}
//           />
//         )}

//         {showLoader && <Loader />}

//         {gallery.length > 0 && !showLoader && showLoadMore && (
//           <Button onLoadMore={this.fetchGallary} />
//         )}

//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImage.largeImageURL} alt={largeImage.tags} />
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

