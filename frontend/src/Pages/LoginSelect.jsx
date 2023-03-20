import { useNavigate } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
    {
        // url: "https://source.unsplash.com/random",
        color: "primary",
        title: "Trainer Login",
        width: "20%",
        to: "/trainerlogin",
    },
    {
        // url: "https://source.unsplash.com/random1",
        color: "primary",
        title: "Student Login",
        width: "20%",
        to: "/login",
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
        zIndex: 1,
        "& .MuiImageBackdrop-root": {
            opacity: 0.15,
        },
        "& .MuiImageMarked-root": {
            opacity: 0,
        },
        "& .MuiTypography-root": {
            border: "4px solid currentColor",
        },
    },
}));

const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    fontSize: 100,
}));

const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
}));

export const LoginSelect = () => {

    const navigate = useNavigate();
    return (
        <div
            style={{
                display: "table",
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
            }}
        >
            <Box
                sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
                style={{
                    // paddingLeft:'16px'
                    display: "table-cell",
                    verticalAlign: "middle",
                    textAlign: "center",
                }}
            >
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                            marginRight: "2%",
                            marginLeft: "2%",
                            marginTop: "3%",


                        }}
                        onClick={() => navigate(image.to)}
                    >
                        {/* <ImageSrc style={{ backgroundImage: `url(${image.url})` }} /> */}
                        <ImageSrc style={{ backgroundColor: '#ffff00' }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="blue"

                                sx={{
                                    position: "relative",
                                    p: 4,
                                    pt: 2,
                                    fontSize: 30,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
        </div>
    );
};
