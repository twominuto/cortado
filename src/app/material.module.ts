import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatExpansionModule ,MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [MatExpansionModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatExpansionModule, MatMenuModule, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}