import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    top: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "240px",
        "& .toggleIcon":{
            color:'black'
        },
        '& .topTextSection':{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "4px",
            "& .topText":{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            },
            "& .topSubText":{
                marginTop: "5px"
            }
        },
    },
    expandSection:{
        display: "flex",
        alignItems: "center", 
        justifyContent: "space-between",
        marginTop: "25px",
        '& .insightSection':{
            display: "flex",
            '& .verticalDivider':{
                backgroundColor: "black",
                marginLeft: "20px !important",
                marginRight: "20px !important",   
            },
        },
        '& .buttonSection':{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& .button':{
                backgroundColor: '#459BD7 !important',
                paddingLeft: '30px !important',
                paddingRight: '30px !important',
                marginBottom: '30px !important',
            },
            '& .horizontalDivider':{
                width: "10%",
                backgroundColor: "black",
            },
        },
    },
    insight:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "250px",
        "& .insightText":{
            display: "flex",
            flexDirection: "column", 
            alignItems: "flex-start",
        },
    },
    insightIcon:{
        color: '#94D045',
    },
})

export {useStyles}