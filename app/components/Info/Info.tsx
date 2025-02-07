'use client'

import React from 'react';
import styles from './Info.module.css';
import { Close } from '@mui/icons-material';
import { useAppContext } from '../../providers/AppProvider';
import { IconButton } from '@mui/material';

const Info: React.FC = () => {
    const { info, setInfo } = useAppContext();

    return (
        info && (
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <p>{info}</p>
                    <IconButton
                    sx={{
                            color: '#ededed'
                    }}
                    onClick={() => setInfo('')}>
                        <Close sx={{
                        }} />
                    </IconButton>
                </div>
            </div>
        ));
}

export default Info;