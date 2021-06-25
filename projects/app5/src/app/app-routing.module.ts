import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'another-one',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:5005/remoteEntry.js',
        remoteName: 'anotherOne',
        exposedModule: 'AnotherOne',
      }).then((m) => m.AnotherOneModule),
  },

  {
    path: 'nested-mfe',
    loadChildren: () =>
      import('./nested-mfe/nested-mfe.module').then((m) => m.NestedMfeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
