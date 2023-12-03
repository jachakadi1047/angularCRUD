import { Node } from '@wk/components-angular13';
import { componentApi } from '@wk/components-angular13';

import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-demo-browse-tree',
  templateUrl: './demo-browse-tree.component.html',
  styleUrls: ['./demo-browse-tree.component.css']
})
export class DemoBrowseTreeComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef) {}

  writeState = componentApi.writeState.bind(this);
  tree!: Node[];

  ngOnInit(): void {
    this.tree = [
      {
        title: 'Parent node 1',
        id: '1',
        type: 'Chevron',
        icon: 'lock',
        checkbox: true,
        children: [
          { title: 'Child 1.1', id: '1.1', type: 'Bullet' },
          { title: 'Child 1.2', id: '1.2', type: 'Bullet' },
          { title: 'Child 1.3', id: '1.3', type: 'Bullet' },
        ],
      },
      {
        title: 'Parent node 2',
        id: '2',
        type: 'Chevron',
        icon: 'lock',
        checkbox: true,
        children: [
          {
            title: 'Child 2.1',
            type: 'Bullet',
            id: '2.1',
            checkbox: true,
            icon: 'lock',
            disabled: true,
            children: [
              { title: 'Anchor 2.1.1', id: '2.1.1', type: 'Anchor' },
              { title: 'Anchor 2.1.2', id: '2.1.2', type: 'Anchor' },
              {
                title: 'Anchor 2.1.3',
                id: '2.1.3',
                type: 'Anchor',
                href: '#/foo',
                disabled: true,
              },
            ],
          },
        ],
      },
      {
        title: 'Parent node 3',
        id: '3',
        type: 'Chevron',
        icon: 'lock',
        checkbox: true,
        children: [{ id: '3.1', type: 'Loading' }],
      },
    ];
    this.isLoading = false;
  }

  isLoading!: boolean;

  reloadTree() {
    this.writeState('isLoading', true);
    setTimeout(() => this.writeState('isLoading', false), 3000);
  }

}
