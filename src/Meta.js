import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = ({
    title = 'React Example',
    description = 'React Example',
    author = '홍길동',
    subject = 'React Example',
    copyright = '홍길동',
    keyword = 'React',
    url = window.location.href,
    image = null,
    icon = null,
    shortcutIcon = null,
    appleTouchIcon = null,
}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{title}</title>
                {/* SEO 태그 */}
                <meta name='description' content={description} />
                <meta name='keywords' content={keyword} />
                <meta name='author' content={author} />
                <meta name='subject' content={subject} />
                <meta name='copyright' content={copyright} />
                <meta name='content-language' content='ko' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:url' content={url} />
                <meta property='og:image' content={image} />
                <link rel='icon' href={icon} type='image/png' />
                <link rel='shortcut icon' href={shortcutIcon} type='image/png' />
                <link rel='apple-touch-icon' href={appleTouchIcon} type='image/png' />

                
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;
