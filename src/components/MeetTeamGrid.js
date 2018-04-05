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
    position: 'data scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim felis, scelerisque in mattis ut, pellentesque sit amet quam. Ut condimentum pretium tempus. Nunc pharetra, dui eu eleifend ultricies, est lectus vulputate nunc, nec lobortis lacus massa at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi risus felis, aliquet tempus odio at, ullamcorper pulvinar metus. Nullam id tellus ut massa mattis ultricies. Ut venenatis sollicitudin quam, id laoreet enim faucibus consequat.'
  },
  {
    img: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    name: 'Tim Perkins',
    position: 'data master',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim felis, scelerisque in mattis ut, pellentesque sit amet quam. Ut condimentum pretium tempus. Nunc pharetra, dui eu eleifend ultricies, est lectus vulputate nunc, nec lobortis lacus massa at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi risus felis, aliquet tempus odio at, ullamcorper pulvinar metus. Nullam id tellus ut massa mattis ultricies. Ut venenatis sollicitudin quam, id laoreet enim faucibus consequat.'
  },
  {
    img: 'https://media.licdn.com/dms/image/C5603AQGH236d3o6nIQ/profile-displayphoto-shrink_800_800/0?e=1527202800&v=alpha&t=S5OwUCmyFbAB-zd_XrbX51THlx8F7nGtUOu_IAZqDYA',
    name: 'Sasha Mushovic',
    position: 'data scientist',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim felis, scelerisque in mattis ut, pellentesque sit amet quam. Ut condimentum pretium tempus. Nunc pharetra, dui eu eleifend ultricies, est lectus vulputate nunc, nec lobortis lacus massa at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi risus felis, aliquet tempus odio at, ullamcorper pulvinar metus. Nullam id tellus ut massa mattis ultricies. Ut venenatis sollicitudin quam, id laoreet enim faucibus consequat.',
  },
  {
    img: 'https://media.licdn.com/dms/image/C4D03AQFqFY848_mtsg/profile-displayphoto-shrink_200_200/0?e=1527202800&v=alpha&t=oem2tycbkHvBRTVHHn-HLjWwCWCM_OLjrWED9eTBkZA',
    name: 'Kayce Danna',
    position: 'software engineer',
    bio: 'Kayce is a software engineer with a business finance background who sees opportunity and growth in seeking out new challenges. She is equally at home being the student or the teacher, which perpetuates knowledge sharing amongst engineering teams that she is a part of. Whether she is fixing bugs, or working on features, she takes pride and ownership in everything she touches.'
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
                  subtitle={<span><b>{tile.position}</b></span>}
              >
              <img src={tile.img} alt=''/>
              </GridTile>
           ))}
      </GridList>
  </div>
);



export default Grid
