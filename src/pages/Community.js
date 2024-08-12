import styled from 'styled-components';
import {
    Typography,
    Box,
} from '@mui/material';

const communityPhotos = [
    // Array of photo objects with src and description
];

const Container = styled.div`
    margin: 6rem auto;
    display: grid;
    max-width: 1200px;
    padding: 0 1rem;

    @media (min-width: 600px) {
        padding: 0 2rem;
    }

    @media (min-width: 1200px) {
        padding: 0 6rem;
    }

    @media (min-width: 1536px) {
        padding: 0 13rem;
    }
`;

const SectionBox = styled.div`
    margin: 2rem 2rem;
`;

const TitleTypography = styled.h6`
    color: #ccd6f6;
    margin-right: 2rem;
    display: flex;
    align-items: center;
`;

const HighlightedText = styled.span`
    color: #64ffda;
    margin-right: 0.5rem;
`;

const MainTitleTypography = styled.h4`
    font-family: sans-serif;
    font-weight: 800;
    margin: 2rem 0;
    padding: 0 5rem;
    text-align: center;
`;

const BodyTypography = styled.p`
    color: #8892af;
    padding: 0 5rem;
    text-align: center;
`;

const SubTitleTypography = styled.h5`
    font-family: sans-serif;
    font-weight: 700;
    margin: 2rem 0;
    color: #ccd6f6;
    text-align: center;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
`;

const Card = styled.div`
    background-color: transparent;
    color: #ccd6f6;
    border: 1px solid #ccd6f6;
    border-radius: 8px;
    overflow: hidden;
`;

const CardMedia = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 16px;
`;

const StatBox = styled.div`
    text-align: center;
    background-color: #112240;
    padding: 2rem;
    border-radius: 8px;
`;

const StatNumber = styled.h4`
    color: #64ffda;
`;

const StatText = styled.p`
    color: #ccd6f6;
`;

const JoinButton = styled.a`
    display: inline-block;
    background-color: #64ffda;
    color: #0a192f;
    padding: 1rem 2rem;
    margin-top: 2rem;
    text-decoration: none;
    border-radius: 8px;
    width: auto;
    max-width: none; /* Ensures no max-width constraint is applied */
    box-sizing: border-box; /* Ensures padding is included in the width */
`;



const Community = () => {
    return (
        <Container id="community">
            <SectionBox>
                <Box sx={{ mx: { xs: 4 } }}>
                    <Typography variant="h6" sx={{ mr: 2, color: '#ccd6f6' }}>
                        <Typography variant="span" sx={{ color: '#64ffda' }}>
                            04.{" "}
                        </Typography>
                        My Community
                    </Typography>
                    <Typography variant="h4" sx={{ fontFamily: 'sans-serif', fontWeight: 800, my: 2, px: 5 }}></Typography>
                </Box>
                <MainTitleTypography>
                    The nameSpace Community
                </MainTitleTypography>
                <BodyTypography>
                    The nameSpace Community was founded in 2022 with the mission to empower tech enthusiasts through knowledge sharing, collaboration, and innovation. Our community has grown to include numerous members who participate in various events, workshops, and programs aimed at enhancing their technical skills and fostering a collaborative environment.
                </BodyTypography>
            </SectionBox>

            {/* <SectionBox>
                <SubTitleTypography>
                    Community Photos
                </SubTitleTypography>
                <GridContainer>
                    {communityPhotos.map((photo, index) => (
                        <Card key={index}>
                            <CardMedia src={photo.src} alt={photo.description} />
                            <CardContent>
                                <BodyTypography>{photo.description}</BodyTypography>
                            </CardContent>
                        </Card>
                    ))}
                </GridContainer>
            </SectionBox> */}

            <SectionBox>
                <SubTitleTypography>
                    Community Stats
                </SubTitleTypography>
                <GridContainer>
                    <StatBox>
                        <StatNumber>10000+</StatNumber>
                        <StatText>Students Impacted</StatText>
                    </StatBox>
                    <StatBox>
                        <StatNumber>100+</StatNumber>
                        <StatText>Colleges</StatText>
                    </StatBox>
                    <StatBox>
                        <StatNumber>100+</StatNumber>
                        <StatText>Public Events</StatText>
                    </StatBox>
                    <StatBox>
                        <StatNumber>4</StatNumber>
                        <StatText>Flagship Events</StatText>
                    </StatBox>
                    <StatBox>
                        <StatNumber>5</StatNumber>
                        <StatText>Member Programs</StatText>
                    </StatBox>
                    <StatBox>
                        <StatNumber>50+</StatNumber>
                        <StatText>Collaborations</StatText>
                    </StatBox>
                </GridContainer>
            </SectionBox>

            <SectionBox style={{ textAlign: 'center' }}>
                <SubTitleTypography>
                    Reach out to nameSpace
                </SubTitleTypography>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <JoinButton href="https://namespacecomm.in" target="_blank">
                        Visit our Website
                    </JoinButton>
                    <JoinButton href="https://linktr.ee/namespacecomm" target="_blank">
                        Follow us on our socials
                    </JoinButton>
                </div>



            </SectionBox>
        </Container>
    );
};

export default Community;
