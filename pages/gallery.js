import React,{useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ListGallery } from '../Components/GalleryComponents/listGallery';

const Gallery = ({ result }) => {
    const [gallery, setGallery] = useState(result);

    return (
        <ListContainer>
            {gallery && gallery.map((item) => <ListGallery item={item}/>)}
        </ListContainer>
    )
}

export default Gallery;


// UI Components definition
const ListContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin:20px;
    @media screen and (min-width:720px){
        margin-left:50px;
    }
`;


export async function getServerSideProps() {
    // response -> datas from air table
    const response = await axios({ method: 'GET', url: 'https://sporg.herokuapp.com/api/list-gallery' });
    const result = response.data.gallery; // data passed from the server -> {gallery:'',msg:''}
    return {
        props:{result}
    }
}