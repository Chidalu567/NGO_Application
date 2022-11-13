import React from 'react';
import { Card } from 'antd';
import { Image } from 'cloudinary-react';

const { Meta } = Card;

export const ListGallery = ({item}) => {
    return (
        <Card hoverable="true" style={{ width: 300,marginRight:10,marginBottom:10 }} cover={<Image key={item.Title} cloudName="dqzw0lh9k" publicId={item.Public_Id} width="300" crop="scale" />}>
            <Meta title={item.Title} description={item.Description} />
            <h4>{item.Date}</h4>
        </Card>

    )
}