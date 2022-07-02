import './news.css';
import { NewsObject, UnionHTMLAndNull } from '../../../types/types';

class News {
    public draw(data: NewsObject[]) {
        const news: NewsObject[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: UnionHTMLAndNull = document.querySelector('#newsItemTemp');

        if (newsItemTemp) {
            news.forEach((item: NewsObject, idx: number) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const metaPhoto: UnionHTMLAndNull = newsClone.querySelector('.news__meta-photo');
                if (metaPhoto) {
                    metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                const metaAuthor: UnionHTMLAndNull = newsClone.querySelector('.news__meta-author');
                if (metaAuthor) {
                    metaAuthor.textContent = item.author || item.source.name;
                }

                const metaDate: UnionHTMLAndNull = newsClone.querySelector('.news__meta-date');
                if (metaDate) {
                    metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const descriptionTitle: UnionHTMLAndNull = newsClone.querySelector('.news__description-title');
                if (descriptionTitle) {
                    descriptionTitle.textContent = item.title;
                }

                const descriptionSource: UnionHTMLAndNull = newsClone.querySelector('.news__description-source');
                if (descriptionSource) {
                    descriptionSource.textContent = item.source.name;
                }

                const descriptionContent: UnionHTMLAndNull = newsClone.querySelector('.news__description-content');
                if (descriptionContent) {
                    descriptionContent.textContent = item.description;
                }

                newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

                fragment.append(newsClone);
            });
        }

        const newsElement: UnionHTMLAndNull = document.querySelector('.news');
        if (newsElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}

export default News;
