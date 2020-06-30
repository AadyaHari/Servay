class Form{
    constructor(){}
    display(){
        var title = createElement("h2");
        title.html("Is the earth flat?");
        title.position(130,10);
        //var input = createInput("Name");
        var button = createButton("YES");
        var button2 = createButton("NO");

        //input.position(130,160);
        button.position(170,200);
        button2.position(220,200);
        button2.mousePressed(function(){
            title.hide();
            button.hide();
            button2.hide();
        });
        var title2 = createElement("h2");
        title2.html("Is water clear or blue?")
        title2.position(430,10)
        var button3 = createButton("CLEAR");
        var button4 = createButton("BLUE");
         button3.position(535,200);
         button4.position(475,200);

        button3.mousePressed(function(){
            title2.hide();
            button3.hide();
            button4.hide();
        });
        var title3 = createElement("h2");
        title3.html("Which ocean is the Bermuda Triangle loacated?")
        title3.position(730,10)
        var button5 = createButton("North Atlantic Ocean");
        var button6 = createButton("Indian Ocean");
        var button7 = createButton("Pacific Ocean");
        var button8 = createButton("Arctic Ocean");

         button5.position(900,200);
         button6.position(900,150);
         button7.position(900,100);
         button8.position(900,250);


        button5.mousePressed(function(){
            title3.hide();
            button5.hide();
            button6.hide();
            button7.hide();
            button8.hide();
        });

    }
}