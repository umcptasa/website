import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import SEO from "components/seo"
import useBios from "hooks/useBios"
import Bio from "components/Bios/Bio"
import PageContent from "components/Layout/PageContent"
import ParallaxBackground from "components/General/ParallaxBackground"

const styles = (theme: Theme) =>
    createStyles({
        grid: {},
        gridItem: {},
        title: {
            color: "#ffffff",
            fontSize: "64px",
            textAlign: "center",
            marginTop: "auto",
            marginBotom: "auto",
        },
    })

type Props = WithStyles<typeof styles> &
    PageProps & {
        data: GatsbyTypes.BoardPageQuery
    }

function BoardPage(props: Props) {
    const { data, classes } = props
    const bioData = useBios()
    const { boardBackground } = data

    if (!boardBackground) throw new Error("Board background does not exist.")
    return (
        <>
            <SEO title="Board" />
            <ParallaxBackground image={boardBackground}>
                <h1 className={classes.title}>Meet the Board</h1>
            </ParallaxBackground>
            <PageContent>
                <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={3}
                        alignItems="stretch"
                        alignContent="stretch"
                        justify="center"
                    >
                        {bioData.map((bio) => (
                            <Grid
                                item
                                className={classes.gridItem}
                                xs={12}
                                sm={4}
                                lg={3}
                                key={bio.node.id}
                            >
                                <Bio bioData={bio} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query BoardPage {
        boardBackground: file(relativePath: { eq: "board.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(BoardPage)
