import { memo, useMemo, useState } from "react";
import { SkeletonUser } from '../../common/skeleton';
import styles from './welcome.module.css';
import Image from "next/image";
import config from "../../../../config";
import { useViewportWidthSize } from '../../../util';

const Welcome = () => {
    const [loading, setLoading] = useState(true);
    const { BASE_PATH: basePath } = config;

    const { widthIGT768 } = useViewportWidthSize();

    const sizeImage = useMemo(() => {
        return widthIGT768 ? 280 : 200;
    }, [widthIGT768]);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.wrapper_title}>
                    <h1>Welcome</h1>
                </div>
                <div className={styles.wrapper_avatar}>
                    <div className={styles.skeleton} style={{
                        '--opacity': loading ? 1 : 0,
                    }}>
                        <SkeletonUser width={sizeImage} />
                    </div>
                    <div className={styles.awatar} style={{
                        '--opacity': loading ? 0 : 1,
                    }}>
                        <div className={styles.image}>
                            <Image
                                src={`${basePath}/images/crop-avatar-web-card.jpg`}
                                alt='avatar'
                                loading='lazy'
                                width={sizeImage}
                                height={sizeImage}
                                onLoadingComplete={() => setLoading(false)}
                                priority={false}
                            />
                        </div>
                        <div className={styles.wrapper_text}>
                            <span className={styles.text}>I am front-end developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Welcome);