import React, { useState } from 'react';
import { 
	ScrollView, 
	View,
	StyleSheet, 
	ImageBackground, 
	Text} from 'react-native';

import { arrayImages } from '../../../array_images';
import Search from '../../components/Search';
import Slide from '../../components/Slide';
import MovieLibrary from '../../components/MovieLibrary';

export default function Home() {

	const [ background, setBackground ] = useState(arrayImages[0].img);
	const [ activeIndex, setActiveIndex ] = useState(0);

	return (
		<ImageBackground
			source={{ uri: background }}
			style={ styles.imgBg }
			blurRadius={5}
		>
			<ScrollView style={styles.container}>
				<View style={{ flex: 1, height: 450 }}>
					<View style={{ ...StyleSheet.absoluteFill }}>
						
							<Search />

							<Text style={styles.title}>
								Adicionados recentemente
							</Text>

							<Slide 
								lista={arrayImages}
								changeBackground={ (index) => {
									setBackground(arrayImages[index].img);
									setActiveIndex(index);
								}}
							/>						
							
					</View>
				</View>
				<MovieLibrary lista={arrayImages} title={'Filmes'} />
				<MovieLibrary lista={arrayImages} title={'Séries'} />
			</ScrollView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
    flex: 1
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000'
  },
  title: { 
    color: '#fff', 
    fontSize: 25, 
    fontWeight: 'bold', 
    marginLeft: 10, 
    marginVertical: 10
  }
});