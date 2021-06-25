import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
    {
      path: 'remote1',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:5001/remoteEntry.js',
          remoteName: 'remote1',
          exposedModule: 'Remote1',
        }).then((m) => m.Remote1Module),
    },
    
    {
      path: 'remote3',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:5002/remoteEntry.js',
          remoteName: 'remote3',
          exposedModule: 'Remote3',
        }).then((m) => m.Remote3Module),
    },
    
    {
      path: 'remote-four',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:5004/remoteEntry.js',
          remoteName: 'remoteFour',
          exposedModule: 'RemoteFour',
        }).then((m) => m.RemoteFourModule),
    },
    
    {
      path: 'nested-mfe',
      loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:5006/remoteEntry.js',
          remoteName: 'nestedMfe',
          exposedModule: 'NestedMfe',
        }).then((m) => m.NestedMfeModule),
    }
    
    
    
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
