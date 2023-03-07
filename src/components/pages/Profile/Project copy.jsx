import { Box, Typography } from '@mui/material';
import images from '_/assets/images';

import { Button } from '_/components/common';

console.log(images['./thpt.png']);
const content = [
    {
        name: 'Project 1',
        image: `${images['./thpt.png']}`,
        url: '',
        languages: ['html', 'css', 'javascript'],
        technologies: [
            'React',
            'Babel',
            'Slick Carousel',
            'babel-plugin-module-resolver',
            'classnames',
            'customize-cra',
            'sass',
            'uuid',
            'Material UI',
            'Redux Toolkit',
            'Axios',
            'Firebase',
        ],
    },
    {
        name: 'Project 1',
        image: `${images['./thpt.png']}`,
        url: '',
        languages: ['html', 'css', 'javascript'],
        technologies: [
            'React',
            'Babel',
            'Slick Carousel',
            'babel-plugin-module-resolver',
            'classnames',
            'customize-cra',
            'sass',
            'uuid',
            'Material UI',
            'Redux Toolkit',
            'Axios',
            'Firebase',
        ],
    },
    {
        name: 'Project 2',
        image: `${images['./thpt.png']}`,
        url: '',
        languages: ['html', 'css', 'javascript'],
        technologies: [
            'React',
            'Babel',
            'Slick Carousel',
            'babel-plugin-module-resolver',
            'classnames',
            'customize-cra',
            'sass',
            'uuid',
            'Material UI',
            'Redux Toolkit',
            'Redux Persist ',
            'Nodejs',
            'Express',
            'Sequelize',
            'Socket.io',
            'Jsonwebtoken',
            'MySQL',
            'Axios',
            'Firebase',
        ],
    },
];
const ContentItem = ({ content }) => {
    const { name, image, url, languages, technologies } = content;

    console.log(content, image);
    return (
        <Box
            sx={{
                borderRadius: '2px',
                isolation: 'isolate',
                position: 'relative',
                width: '100%',
                maxHeight: '100%',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    padding: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    style={{ padding: 0 }}
                    to={`/`}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <Box sx={{ position: 'relative' }}>
                        <Box
                            sx={{
                                paddingBottom: '56.25%',
                            }}
                        >
                            <Box
                                sx={{
                                    height: '100%',
                                    position: 'absolute',
                                    width: '100%',
                                    backgroundImage: `url(${image})`,
                                    // width: '360px',
                                    // height: '180px',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundColor: '#eee',
                                    borderRadius: '10px',
                                }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                padding: '10px 5px',

                                '& * ': {
                                    marginBlock: '0px',
                                    paddingBlockEnd: '4px',
                                    color: 'inherit',
                                    display: 'block',
                                    display: '-webkit-box',
                                    lineHeight: '1.5',
                                    maxHeight: '47px',
                                    webkitLineClamp: 2,
                                    webkitBoxOrient: 'vertical',
                                    visibility: 'visible',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                },
                            }}
                        >
                            <Typography variant="h5" fontWeight={700}>
                                {name}
                            </Typography>
                            <Typography variant="h6">123456</Typography>
                        </Box>
                    </Box>
                </Button>
            </Box>
        </Box>
    );
};

const Project = () => {
    const renderContent = () => {
        return content.map((item, index) => <ContentItem key={index} content={item} />);
    };
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat( auto-fill, minmax(400px, 1fr))',
                gridAutoRows: 'auto',
                gap: '10px',
            }}
        >
            {renderContent()}
        </Box>
    );
};

export default Project;
