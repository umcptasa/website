import React from "react"
import { graphql, PageProps } from "gatsby"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import SEO from "components/seo"
import PastEventsGrid from "components/Events/PastEventsGrid"
import Welcome from "components/General/Welcome"
import PageContent from "components/Layout/PageContent"
import ParallaxBackground from "components/General/ParallaxBackground"
import Text from "components/Typography/Text"
// import Newsletter from "components/Mailchimp/Newsletter"

import Section from "components/Layout/Section"
import ButtonLink from "components/Button/ButtonLink"

const styles = (theme: Theme) =>
    createStyles({
        center: {
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
        },
    })

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: GatsbyTypes.HomePageQuery
    }

function IndexPage(props: Props) {
    const { data, classes } = props
    const { mainBackground, presidentBackground, newsletterBackground } = data

    if (!mainBackground) throw new Error("Main background does not exist.")

    return (
        <>
            <SEO title="Home" />
            <ParallaxBackground image={mainBackground} imageHeight="100vh">
                <Welcome />
            </ParallaxBackground>

            <PageContent>
                <Section>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="column"
                    >
                        <Text variant="h3" color="textSecondary" align="center">
                            Welcome to TASA @ UMCP
                        </Text>
                        <Text
                            variant="body1"
                            color="textPrimary"
                            align="center"
                        >
                            <b>Taiwanese American Student Association (TASA)</b>{" "}
                            is a social and cultural student organization that
                            aims to celebrate Taiwanese culture. We welcome
                            people from any cultural background as long as you
                            are curious or passionate about Taiwanese culture.
                            We have weekly GBMS on <b>Mondays 7pm - 9pm</b> in
                            Stamp Student Union and host multiple events each
                            semester. Want to learn more? Check out what were
                            about.
                        </Text>
                        <ButtonLink to="about" variant="contained" color="primary">
                            About TASA
                        </ButtonLink>
                    </Grid>
                </Section>

                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Section>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="column"
                    >
                        <Text variant="h3" color="textSecondary" align="center">
                            Want to contact us?
                        </Text>

                        <ButtonLink
                            to="contact-us"
                            color="primary"
                            variant="contained"
                        >
                            Click Here!
                        </ButtonLink>
                    </Grid>
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query HomePage {
        mainBackground: file(relativePath: { eq: "Taiwan.jpg" }) {
            ...BackgroundImage
        }
        presidentBackground: file(relativePath: { eq: "bg10.jpg" }) {
            ...BackgroundImage
        }
        newsletterBackground: file(relativePath: { eq: "Taiwan2.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(IndexPage)
