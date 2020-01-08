import { Component } from "@angular/core";

@Component({
    selector: "WithTabPage",
    templateUrl: "./with-tab.page.html",
    styleUrls: ['with-tab.page.scss']
})

export class WithTabPage {
    activeTab: number;

    constructor(){
        this.chooseTab(1);
    }

    chooseTab(choosen: number){
        this.activeTab = choosen;
    }
}
