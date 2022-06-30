import './sources.css';
import { SourceObject } from '../../../types/types'

class Sources {
    public draw(data: SourceObject[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp) {
            data.forEach((item: SourceObject) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
                
                const itemName: HTMLTemplateElement | null = sourceClone.querySelector('.source__item-name');
                if(itemName) {
                    itemName.textContent = item.name;
                }

                const itemElement: HTMLTemplateElement | null = sourceClone.querySelector('.source__item');
                if (itemElement) {
                    itemElement.setAttribute('data-source-id', item.id);
                }
                
                fragment.append(sourceClone);
        });
        }

        const sources: HTMLTemplateElement | null = document.querySelector('.sources');
        if (sources) {
            sources.append(fragment);
        }
        
    }

}

export default Sources;
