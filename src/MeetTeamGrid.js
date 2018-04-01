import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://media.licdn.com/dms/image/C4E03AQE8mX-Zoz7qMg/profile-displayphoto-shrink_800_800/0?e=1527202800&v=alpha&t=7d9ZakXkdgQdXEdGqbcgK8DKglve_0qp-HQiHHJDcy8',
    name: 'Sagi Zisman',
    bio: 'data scientist',
  },
  {
    img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    name: 'Tim Perkins',
    bio: 'data master',
  },
  {
    img: 'https://media.licdn.com/dms/image/C5603AQGH236d3o6nIQ/profile-displayphoto-shrink_800_800/0?e=1527202800&v=alpha&t=S5OwUCmyFbAB-zd_XrbX51THlx8F7nGtUOu_IAZqDYA',
    name: 'Sasha Mushovic',
    bio: 'data scientist',
  },
  {
    img: 'https://media.licdn.com/dms/image/C4D03AQFqFY848_mtsg/profile-displayphoto-shrink_200_200/0?e=1527202800&v=alpha&t=oem2tycbkHvBRTVHHn-HLjWwCWCM_OLjrWED9eTBkZA',
    name: 'Kayce Danna',
    bio: 'software engineer',
  },
];

const Grid = () => (
    <div className='Grid' style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
        >
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.name}
                    subtitle={<span><b>{tile.bio}</b></span>}
                >
                <img src={tile.img} alt=''/>
                </GridTile>
             ))}
        </GridList>
    </div>
);


export default Grid