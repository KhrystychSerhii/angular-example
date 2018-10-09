import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { RecordsComponent } from './records.component';
import { RecordsListComponent } from './list.component';
import { RecordItemComponent } from './record-item.component';

const routes: Routes = [
    {
        path: '',
        component: RecordsComponent,
        children: [
            {
              path: '',
                component: RecordsListComponent,
                data: {
                  title: 'Records'
                }
            },
            {
                path: ':id',
                component: RecordItemComponent,
                data: {
                    title: 'Record'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecordsRoutingModule {}
