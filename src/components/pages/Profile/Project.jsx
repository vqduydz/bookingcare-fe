import { Box, Typography } from '@mui/material';
import images from '_/assets/images';
import './Profile.scss';
import { Button } from '_/components/common';

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
        <Button
            className="project-btn"
            style={{
                padding: '0 0',
                //  border: '1px solid #92929259',
                borderRadius: '10px',
            }}
            to={`/`}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    border: '1px solid #92929259',
                    borderRadius: '10px',
                }}
            >
                <Box sx={{ position: 'relative', width: '100%' }}>
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
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundColor: '#eee',
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                    </Box>
                </Box>
                <Box>
                    <Box
                        sx={{
                            padding: '10px 15px',

                            '& * ': {
                                color: '#555',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '1.6rem',
                                fontWeight: 500,
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '1.4rem',
                                fontWeight: 400,
                            }}
                        >
                            Ngôn ngữ : {languages.join(', ')}
                        </Typography>{' '}
                        <Typography
                            sx={{
                                fontSize: '1.4rem',
                                fontWeight: 400,
                            }}
                        >
                            Công nghệ (framework, thư viện): {technologies.join(', ')}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Button>
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
                gap: '20px',
            }}
        >
            {renderContent()}
        </Box>
    );
};

export default Project;
