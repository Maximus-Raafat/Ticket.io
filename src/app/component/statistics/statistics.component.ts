import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit{
  cities: City[] | undefined;
  selectedCity: City | undefined;

  constructor() {}

  ngOnInit(): void {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom!);
    
    let option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '19%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['ديسمبر','نوفمبر','اكتوبر','سبتمبر','اغسطس', 'يوليو', 'يونيو', 'مايو', 'ابرايل', 'فبراير', 'يناير'],
        axisLabel: {
          interval: 0, 
          rotate: window.innerWidth < 768 ? 45 : 0, 
          fontSize: window.innerWidth < 768 ? 10 : 14, 
          fontFamily: 'Neo Sans Arabic'
        },
        axisLine: {
          lineStyle: {
            color: '#8A74F9' // Color of x-axis
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#8A74F9'
          },
          itemStyle: {
            color: '#8A74F9',
            borderColor: '#fff'
          },
          areaStyle: {
            color: 'rgba(138, 116, 249, 0.2)'
          }
        }
      ]
    };

    option && myChart.setOption(option);

    this.cities = [
      { name: 'سنويا', code: 'year' },
      { name: 'شهريا', code: 'month' },
      { name: 'اسبوعيا', code: 'week' },
      { name: 'يوميا', code: 'daily' }
    ];

    window.addEventListener('resize', () => {
      myChart.resize();
      option.xAxis.axisLabel.rotate = window.innerWidth < 768 ? 45 : 0;
      option.xAxis.axisLabel.fontSize = window.innerWidth < 768 ? 10 : 14;
      myChart.setOption(option);
    });
  }
  

}
