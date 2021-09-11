
import React, { Component } from 'react';

import st from './components/styles.module.css';

import Searchbar from './components/Searchbar/Searchbar';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button'

import fetchDataApi from './services/fetchDataApi';

export class App extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    page: 1,
    showModal: false,
    showLoader: false,
    error: null,
    largeImage: {},
    total: 0,
  };

  componentDidMount() {
    this.setState({ showLoader: true });
    this.fetchGallary();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const naxtQuery = this.state.searchQuery;
    if (prevQuery !== naxtQuery) {
      this.fetchGallary();
    }
  }

  fetchGallary = () => {
    const { searchQuery, page } = this.state;
    this.setState({ showLoader: true });

    fetchDataApi(searchQuery, page)
      .then(({ hits, total }) => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          page: prevState.page + 1,
          total,
        }));
        this.scrollToDown();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ showLoader: false }));
  };

  scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  handleFormSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.setState({ searchQuery, gallery: [], page: 1 });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleOpenPicture = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  showLoadMore = () => {
    const { total, page } = this.state;
    return Math.ceil(total / 12) !== page - 1;
  };

  render() {
    const { error, showLoader, showModal, gallery, largeImage } = this.state;
    const showLoadMore = this.showLoadMore();
    return (
      <div className={st.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {error && <p>{error.message}</p>}

        {gallery.length > 0 && (
          <ImageGallery
            gallery={gallery}
            onOpenPicture={this.handleOpenPicture}
          />
        )}

        {showLoader && <Loader />}

        {gallery.length > 0 && !showLoader && showLoadMore && (
          <Button onLoadMore={this.fetchGallary} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage.largeImageURL} alt={largeImage.tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;