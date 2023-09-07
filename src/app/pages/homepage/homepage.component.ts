import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

// Carousel Function
slideConfig = {
  slidesToShow: 1,  //kung ilan ang ididisplay ng images
  slidesToScroll: 1,
  dots: true
}

images = [
  { img: "assets/images/img.png"},
  { img: "assets/images/img1.png" }
]

  displayedColumns: string[] = ['orderId', 'customerName', 'product', 'status'];
  dataSource = new MatTableDataSource<Order>(ORDERS_DATA);

  getStatusClass(status: string): string {
    if (status === 'Completed') {
      return 'status';
    } else if (status === 'Pending') {
      return 'status pending';
    } else if (status === 'New') {
      return 'new';
    }
    return '';
  }
  getStatusCount(status: string): number {
    return ORDERS_DATA.filter(order => order.status === status).length;
  }
  constructor(){}
  ngOnInit(): void {
    
  }
}

interface Order {
  orderId: number;
  customerName: string;
  product: string;
  status: string;
}

const ORDERS_DATA: Order[] = [
  { orderId: 1, customerName: 'John Doe', product: 'Product A', status: 'Completed' },
  { orderId: 2, customerName: 'Jane Smith', product: 'Product B', status: 'Pending' },
  { orderId: 3, customerName: 'Mike Johnson', product: 'Product C', status: 'New' },
  { orderId: 3, customerName: 'Mike Johnson', product: 'Product C', status: 'New' },
  { orderId: 3, customerName: 'Mike Johnson', product: 'Product C', status: 'New' },
  { orderId: 3, customerName: 'Mike Johnson', product: 'Product C', status: 'New' },
  { orderId: 3, customerName: 'Mike Johnson', product: 'Product C', status: 'New' },
  // Add more orders here as needed
];
