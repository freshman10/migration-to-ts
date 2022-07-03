import './sources.css';
import { SourceObject, UnionHTMLAndNull } from '../../../types/types';

class Sources {
    public draw(data: SourceObject[]) {
        const category: HTMLSelectElement | null = document.querySelector('.category');
        const country: HTMLSelectElement | null = document.querySelector('.country');
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: UnionHTMLAndNull = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item: SourceObject) => {
                if (
                    item.category === category?.options[category.selectedIndex].textContent &&
                    item.country === country?.options[country.selectedIndex].textContent
                ) {
                    const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                    const itemName: UnionHTMLAndNull = sourceClone.querySelector('.source__item-name');
                    if (itemName) {
                        itemName.textContent = item.name;
                    }

                    const itemElement: UnionHTMLAndNull = sourceClone.querySelector('.source__item');
                    if (itemElement) {
                        itemElement.setAttribute('data-source-id', item.id);
                    }

                    fragment.append(sourceClone);
                }
            });
        }

        const sources: UnionHTMLAndNull = document.querySelector('.sources');
        const news: UnionHTMLAndNull = document.querySelector('.news');
        if (sources && news) {
            sources.innerHTML = '';
            news.innerHTML = '';
            sources.append(fragment);
        }
    }
}

export default Sources;
