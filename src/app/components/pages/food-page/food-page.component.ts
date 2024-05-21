import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../../star-rating/star-rating.component';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, NgFor, RouterModule, CommonModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{
  food!: Food;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,private cartService: CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.food = foodService.getFoodById(params.id);
    })

  }

  ngOnInit(): void{

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
