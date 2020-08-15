import React, {FC} from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import {Chip, Card, CardContent, CardActionArea, Typography, Backdrop} from '@material-ui/core';
import styles from './NewsSkeleton.module.scss';

const NewsSkeleton: FC = () => {
    return(
        <Card variant="outlined" className={styles.card}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2"><Skeleton/><Skeleton/></Typography>
                <Typography gutterBottom component="span" variant="body2"><Skeleton/><Skeleton/><Skeleton/><Skeleton/></Typography>
            </CardContent>
            <CardContent>
                <Skeleton width='80%'/>
                <Skeleton width='50%'/>
            </CardContent>
        </Card>
    )
}

const array = [1, 2, 3, 4, 5, 6];

const SkeletonRender = array.map(val => <NewsSkeleton/>);

export default SkeletonRender;