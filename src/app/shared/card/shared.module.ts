import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";


@NgModule({
// Add all the shared components to this module
    declarations : [CardComponent],
    // export what modules your shared module should make available to other modules
    exports : [CardComponent]

})
export class SharedModule {}