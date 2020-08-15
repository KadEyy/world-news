import React, {FC, useRef, useEffect, useState} from 'react';
import {Chip, Card, CardContent, CardActionArea, Typography, Backdrop} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LanguageIcon from '@material-ui/icons/Language';
import styles from './News.module.scss';
import NewsType from './newsType';
const format = require('date-format');


const News: FC<NewsType> = ({title, highlight, url, date, language, text}) => {

    const [backdropOpen, setBackDropOpen] = useState<boolean>(false);

    useEffect(() => {

    }, [null])
    return(
        <Card variant="outlined" className={styles.card}>
            <CardActionArea onClick={() => setBackDropOpen(true)}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">{title}</Typography>
                    <Typography gutterBottom dangerouslySetInnerHTML={{__html: '...' + highlight + '...'}} component="span" variant="body2"></Typography>
                </CardContent>
            </CardActionArea>
            <CardContent>
            <Chip icon={<LinkIcon/>} component="a" size="small" variant="outlined" href={url} label={url.length > 30 ? url.slice(0, 27) + '...' : url} clickable/>
                <Chip icon={<DateRangeIcon/>} size="small" variant="outlined" label={format('dd-MM-yyyy', format.parse(format.ISO8601_WITH_TZ_OFFSET_FORMAT, date))}/>
                <Chip icon={<LanguageIcon/>} size="small" variant="outlined" label={language.toUpperCase()}/>
            </CardContent>
            <Backdrop className={styles.backdrop} open={backdropOpen} onClick={() => setBackDropOpen(false)}>
                <Card variant="outlined" className={styles.backdropCard}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h1">{title}</Typography>
                        <Typography dangerouslySetInnerHTML={{__html: text}} gutterBottom component="span" variant="body2"></Typography>
                    </CardContent>
                </Card>
            </Backdrop>
        </Card>
    )
}

export default News;