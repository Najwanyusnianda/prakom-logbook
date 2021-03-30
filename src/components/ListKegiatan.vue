<template>
    <div class="list-kegiatan">
        <h1></h1>

        <div class="bg-gray-100 h-screen">
            <div class="container flex">
                <div class="bg-white h-full m-auto my-10 shadow-sm px-5 w-full min-h-full lg:w-2/3 rounded-lg py-5 ">
                    <litepie-datepicker style="" v-model="selectedDate" as-single use-range :formatter="formatter">
                    </litepie-datepicker>

                    <div class="list-item pt-3">
                        <table class="table-auto border-collapse w-full">
                            <thead>
                                <tr class="rounded-lg text-sm font-medium text-gray-700 text-left"
                                    style="font-size: 0.9674rem">
                                    <th class="px-4 py-3 bg-gray-200 " style="background-color:#f8f8f8">Tanggal</th>
                                    <th class="px-4 py-3 " style="background-color:#f8f8f8">Kegiatan</th>

                                </tr>
                            </thead>
                            <tbody class="text-sm font-normal text-gray-700">
                                <tr class="hover:bg-gray-100 border-b border-gray-200 py-10" v-for="date in thisMonthRange" :key="date">
                                    <td class="px-4 py-2">{{ date }} </td>
                                    <td class="px-4 py-2"></td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div class="r">
                        {{ thisMonthRange }}
                        ------
                        {{ selectedDate }}
                        {{ numberOfDaysInThisMonth }}
                        <ul v-for="kegiatan in allKegiatans" :key="kegiatan.id">
                            <li>{{ kegiatan.kegiatan }}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ref} from 'vue'
import dayjs from 'dayjs'
import LitepieDatepicker from 'litepie-datepicker'
import {mapGetters} from "vuex";

export default {
    name:'ListKegiatan',
    props:{
        listKegiatan:{
            type:Array,

        },

    },
    components:{
         LitepieDatepicker
    },
    data(){
        return{
           newSelectedDate:[],
           selectedRange:[],
           thisMonthRange:[]
        }
    },
    filters:{

    },
    computed: {
      ...mapGetters(["allKegiatans"]),
      numberOfDaysInThisMonth(){
          return dayjs(new Date()).daysInMonth();
      },
        toDays(date){
            if(!date) return ''
            date=dayjs(date).format("DD")
            return date
        }


    },
    methods:{
        getArraySelectedDates:(selectedDate)=>{

           /* let dateArray=new Array();
            let currentDate=startDate;
            console.log(currentDate)

                dateArray.push(new Date(currentDate));
                currentDate=dayjs(currentDate).add(1,'day')

            return dateArray*/
           const newSelectedDate=[dayjs(selectedDate[0]).format("YYYY-MM-DD"),dayjs(selectedDate[1]).format("YYYY-MM-DD")]
           const startDate=newSelectedDate[0]
           const endDate=newSelectedDate[1]
           let  currentSelectedRange=[]
           let currentDate=startDate


           while(currentDate<=endDate){
               currentSelectedRange.push(currentDate)
               currentDate=dayjs(currentDate).add(1,'day').format("YYYY-MM-DD")
           }
            console.log(currentSelectedRange)
            return currentSelectedRange
        },
        getArrayThisMonthDates:()=>{
            const numberOfDaysInThisMonth=dayjs(new Date()).daysInMonth();
            const startDate=dayjs().startOf('month').format("YYYY-MM-DD");
            const endDate=dayjs().endOf('month').format("YYYY-MM-DD");
             let  currentSelectedRange=[]
             let currentDate=startDate


           while(currentDate<=endDate){
               currentSelectedRange.push(currentDate)
               currentDate=dayjs(currentDate).add(1,'day').format("YYYY-MM-DD")
           }
            console.log(currentSelectedRange)
            return currentSelectedRange

        }
    },
    mounted(){

      this.thisMonthRange= this.getArrayThisMonthDates()
    },
    beforeUpdate(){
       this.selectedRange= this.getArraySelectedDates(this.selectedDate)
    },
    updated(){
      //  const newSelectedDate=[dayjs(this.selectedDate[0]).format("YYYY-MM-DD"),dayjs(this.selectedDate[1]).format("YYYY-MM-DD")]
        //this.selectedRange=this.getArrayDates(newSelectedDate[0],newSelectedDate[1])


    },
    setup() {
      const selectedDate = ref([]);
      const formatter = ref({
        date: 'DD MMM YYYY',
        month: 'MMM'
      });

      return {
        selectedDate,
        formatter
      };
    }
}
</script>