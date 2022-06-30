import './news.css';
import {NewsObject} from '../../../types/types'

class News {
    public draw(data: NewsObject[]) {
        const news: NewsObject[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: NewsObject, idx: number) => {
            if (newsItemTemp) {
                const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const metaPhoto: HTMLTemplateElement | null = newsClone.querySelector('.news__meta-photo');
                if ( metaPhoto) {
                    metaPhoto.style.backgroundImage  = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                const metaAuthor: HTMLTemplateElement | null = newsClone.querySelector('.news__meta-author');
                if (metaAuthor) {
                    metaAuthor.textContent = item.author || item.source.name;
                }
                
                const metaDate: HTMLTemplateElement | null = newsClone.querySelector('.news__meta-date');
                if (metaDate) {
                    metaDate.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
                }
                
                const descriptionTitle: HTMLTemplateElement | null = newsClone.querySelector('.news__description-title');
                if (descriptionTitle) {
                    descriptionTitle.textContent = item.title;
                }
                
                const descriptionSource: HTMLTemplateElement | null = newsClone.querySelector('.news__description-source');
                if (descriptionSource) {
                    descriptionSource.textContent = item.source.name;
                }
                
                const descriptionContent: HTMLTemplateElement | null = newsClone.querySelector('.news__description-content');
                if (descriptionContent) {
                    descriptionContent.textContent = item.description;
                }
                
                const readMore: HTMLTemplateElement | null = newsClone.querySelector('.news__read-more a');
                if (readMore) {
                    readMore.setAttribute('href', item.url);
                }
                
                fragment.append(newsClone);
            }

        });

        const newsElement: HTMLTemplateElement | null = document.querySelector('.news');
        if (newsElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
        
    }
}

export default News;
