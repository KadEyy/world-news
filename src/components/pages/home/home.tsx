import * as React from 'react';
import pageStyle from '../Page.module.css';
import style from './Home.module.scss';
import News from '../../news';
import SearchBar from '../../serachBar';
import SkeletonRender from '../../newsSkeleton';

const HomePage: React.FC = () =>{

    const [loading, setLoading] = React.useState<boolean>(false);
    const [dataArray, setDataArray] = React.useState<any[]>([]);

    const renderNews = dataArray.map(news => <News key={news.id} {...{title: news.title, highlight: news.highlight, url: news.url, date: news.discoverDate, language: news.language, text: news.structuredText}}/>)

    return(
        <div className={pageStyle.container}>
            {/*You can put navbar here*/}
            <div className={pageStyle.content}>
                <SearchBar {...{setLoading: setLoading, setData: setDataArray}}/>
                <div className={style.intro}>
                    {loading ? SkeletonRender : renderNews}
                </div>              
            </div>
            {/*You can put footer here*/}
        </div>
    )
}

export default HomePage;