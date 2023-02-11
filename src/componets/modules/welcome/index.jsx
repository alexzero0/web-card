import { memo, useEffect, useState } from "react";
import { SkeletonUser } from '../../common/skeleton';
import styles from './welcome.module.css';
import { downloadAvatar } from '../../../api';
import Image from "next/image";

const Welcome = () => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(null);


    const getAvatar = async () => {
        setLoading(true);
        const avatar = await downloadAvatar();
        setImage(avatar);
        setLoading(false);
    };

    useEffect(() => {
        getAvatar();
    }, []);

    console.log('image', image);
    return (
        <div className={styles.container}>
            <div>
                <h1>Welcom</h1>
            </div>
            {loading && <SkeletonUser />}
            {!loading && (
                <div>
                    <div>
                        <Image src={image} alt='avatar' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(Welcome);