import React, { Component, useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { GalleryComponentData } from './interfaces/galleryComponentData';

import getPhotos from './api/dataApi';
import {Gallery} from './components/gallery';
import {Modal} from './components/modal'
import { PictureData } from './interfaces/pictureData';


export const GalleryContext = React.createContext<GalleryComponentData>({});
const RootStack = createStackNavigator();
const LIMIT = 20;

export default function App() {

  const [galleryData, setData] = useState<PictureData[]>([]);
  const [page, setPage] = useState(1);

    useEffect(() => {
      getPhotos(page, LIMIT)
      .then(photos => {
        setData(galleryData.concat(photos));
      })      
    }, [page]);

    const loadPicture = () => {
      setPage(page + 1);   
    };

      return (
        <NavigationContainer>

          {(galleryData && <GalleryContext.Provider 
            value={{
                galleryData: galleryData,
                loadPictures: loadPicture,
              }}
              >
            <RootStack.Navigator mode="modal">
              <RootStack.Screen name="gallery" component={Gallery} options={{ headerShown: false }}/>
              <RootStack.Screen name="modal" component={Modal} />
            </RootStack.Navigator>  
          </GalleryContext.Provider>)}

        </NavigationContainer>
      )
  }
