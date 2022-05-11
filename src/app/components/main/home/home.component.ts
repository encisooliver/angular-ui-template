import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  milestones: any = [];
  constructor() { }

  ngOnInit(): void {
    this.milestones = [
      { header: '', title: '', description: '', color: '#f58023' },
      { header: 'Write CW20', title: 'UMI CW20 Smart Contract', description: 'Lean Rust and COSMWASM libraries \n  Complete the first CW20 Contract and deploy to Testnet.', color: '#f58023' },
      { header: 'Upload & Instantiate', title: 'Deploy to Mainnet', description: 'Upload and instantiate the CW20 UMI \n Contract in the Mainnet. Transfer initial UMI balance to production wallet.', color: '#f58023' },
      { header: 'Liquidity', title: 'UMI Pricing and Liquidity', description: 'Using Terraswap, Astroport or any other DeFi protocal in the Terra network, provide liquidity by staking LUNA/UST with UMI.', color: '#f58023' },
      { header: 'Marketing', title: 'Humidefi website launching', description: 'Launch the Humidefi website and start marketing through website content, social media and blogs.', color: '#f58023' },
      { header: 'Humidefi Features', title: 'Add DeFi features', description: 'Adding new DeFi features in the Humidefi site that will help the adaption of UMI. Feature like Buying, Swap, Liquidity Pool, etc.', color: '#f58023' }
    ];
  }

}
