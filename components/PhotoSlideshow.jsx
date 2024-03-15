'use client'

import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: '/2000.png',
        thumbnail: '/2000.png',
    },
    {
        original: '/2001.png',
        thumbnail: '/2001.png',
    },
    {
        original: '/2002.png',
        thumbnail: '/2002.png',
    },
    {
        original: '/2003.png',
        thumbnail: '/2003.png',
    },
    {
        original: '/2004.png',
        thumbnail: '/2004.png',
    },
    {
        original: '/2005.png',
        thumbnail: '/2005.png',
    },
    {
        original: '/2006.png',
        thumbnail: '/2006.png',
    },
    {
        original: '/2007.png',
        thumbnail: '/2007.png',
    },
    {
        original: '/2008.png',
        thumbnail: '/2008.png',
    },
    {
        original: '/2009.png',
        thumbnail: '/2009.png',
    },
    {
        original: '/2010.png',
        thumbnail: '/2010.png',
    },
    {
        original: '/2011.png',
        thumbnail: '/2011.png',
    },
    {
        original: '/2012.png',
        thumbnail: '/2012.png',
    },
    {
        original: '/2013.png',
        thumbnail: '/2013.png',
    },
    {
        original: '/2014.png',
        thumbnail: '/2014.png',
    },
    {
        original: '/2015.png',
        thumbnail: '/2015.png',
    },
    {
        original: '/2016.png',
        thumbnail: '/2016.png',
    },
    {
        original: '/2017.png',
        thumbnail: '/2017.png',
    },
    {
        original: '/2018.png',
        thumbnail: '/2018.png',
    },
    {
        original: '/2019.png',
        thumbnail: '/2019.png',
    },
    {
        original: '/2020.png',
        thumbnail: '/2020.png',
    },
    {
        original: '/2021.png',
        thumbnail: '/2021.png',
    },
    {
        original: '/2022.png',
        thumbnail: '/2022.png',
    },
    {
        original: '/2023.png',
        thumbnail: '/2023.png',
    },
];



class PhotoSlideshow extends React.Component {
    render() {
        return <ImageGallery items={images} />;
    }
}

export default PhotoSlideshow;
