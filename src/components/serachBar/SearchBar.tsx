import React, {FC, useState} from 'react';
import styles from './SearchBar.module.scss';
import {TextField, Select, FormControl, InputLabel, Button} from '@material-ui/core';
import axios from 'axios';
import NewsType from '../news/newsType';

interface Props{
    setLoading: React.Dispatch<boolean>,
    setData: React.Dispatch<any[]>
}

const SearchBar: FC<Props> = ({setLoading, setData}) => {

    const [phrase, setPhrase] = useState<string>('');
    const [language, setLanguage] = useState<string | unknown>('');
    const [limit, setLimit] = useState<string | unknown>('3');

    const search = async () => {
        setLoading(true);
        const query = encodeURIComponent(`text:${phrase}${language !== '' ? ` AND language:${language}` : ''}`);
        const response = await axios.get('https://api.newsriver.io/v2/search?query=' + query + `&sortBy=discoverDate&sortOrder=DESC&limit=${limit}`, {headers: {"Authorization":"sBBqsGXiYgF0Db5OV5tAwwyYX8KnkwMIezfShlQgJwzZS3XfgjmAuTQvQkMci4Xmn2pHZrSf1gT2PUujH1YaQA"}})
        if(response.status === 200){
            setData([...response.data]);
        }
        else{

        }
        setLoading(false);
    }

    return(
        <div className={styles.searchbar}>
            <div className={styles.bar}>
                <TextField id="outlined-basic" label="Type phrase" variant="outlined" onChange={(e) => setPhrase(e.currentTarget.value)}/>
                <FormControl variant="outlined" className={styles.formControl} >
                    <InputLabel htmlFor="outlined-age-native-simple">Language</InputLabel>
                    <Select
                    native
                    label="Language"
                    onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option aria-label="None" value="" />
                        <option value={'PL'}>Polish</option>
                        <option value={'DE'}>German</option>
                        <option value={'EN'}>English</option>
                        <option value={'IT'}>Italian</option>
                        <option value={'FR'}>French</option>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={styles.formControl} >
                    <InputLabel htmlFor="outlined-age-native-simple">Limit</InputLabel>
                    <Select
                    native
                    label="Limit"
                    onChange={(e) => setLimit(e.target.value)}
                    >
                        <option value={'3'}>3</option>
                        <option value={'6'}>6</option>
                        <option value={'9'}>9</option>
                        <option value={'12'}>12</option>
                        <option value={'15'}>15</option>
                    </Select>
                </FormControl>
                <Button onClick={() => search()} variant="outlined">Search</Button>
            </div>       
        </div>
    )
}

export default SearchBar;