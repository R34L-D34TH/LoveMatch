function openForm1() 
{
    var top = document.getElementById("Top");
    var bottom = document.getElementById("Bottom");
    var log = document.getElementById("Login-Form");
    var box_opacity = 0;
    var back_opacity = 1;
    var timer = setInterval(function() 
    {
            log.style.display = "block";
            box_opacity += 0.1;  
            back_opacity -=0.05;
            log.style.opacity = box_opacity;
            if( back_opacity > 0.5)
            {
            top.style.opacity = back_opacity;
            bottom.style.opacity = back_opacity; 
            }
            if (box_opacity >= 1) 
            {
			    clearInterval(timer);	
			}
        }, 
50);
}

function closeForm1() 
{
    var top = document.getElementById("Top");
    var bottom = document.getElementById("Bottom");
    var log = document.getElementById("Login-Form");
    var box_opacity = 1;
    var back_opacity = 0.5;
    var timer = setInterval(function() 
    {
        box_opacity -= 0.1;
        back_opacity +=0.05;    
        log.style.opacity = box_opacity; 
        top.style.opacity = back_opacity;
        bottom.style.opacity = back_opacity;
        if (box_opacity <= 0) 
        {
			clearInterval(timer);
			log.style.display = "none";
		}
    }, 
50);
}

function openForm2() 
{
    var top = document.getElementById("Top");
    var bottom = document.getElementById("Bottom");
    var log = document.getElementById("Regis-Form");
    var box_opacity = 0;
    var back_opacity = 1;
    var timer = setInterval(function() 
    {
            log.style.display = "block";
            box_opacity += 0.1;  
            back_opacity -=0.05;
            log.style.opacity = box_opacity;
            if( back_opacity > 0.5)
            {
            top.style.opacity = back_opacity;
            bottom.style.opacity = back_opacity; 
            }
            if (box_opacity >= 1) 
            {
			    clearInterval(timer);	
			}
        }, 
50);
}

function closeForm2() 
{
    var top = document.getElementById("Top");
    var bottom = document.getElementById("Bottom");
    var log = document.getElementById("Regis-Form");
    var box_opacity = 1;
    var back_opacity = 0.5;
    var timer = setInterval(function() 
    {
        box_opacity -= 0.1;
        back_opacity +=0.05;    
        log.style.opacity = box_opacity; 
        top.style.opacity = back_opacity;
        bottom.style.opacity = back_opacity;
        if (box_opacity <= 0) 
        {
			clearInterval(timer);
			log.style.display = "none";
		}
    }, 
50);
}

function formSubmit()
        {
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var query = document.getElementById('query');

            if (name.value === '' || email.value === '' || query.value === '') 
            {
                alert('Please fill in all required fields.');
                return false; 
            }

            alert('Thank you for submitting the form!');
            window.location.href = 'homepage.html'; 

            return true;
        }

        var imgarray = ['shraddha.jpg', 'shraddha2.jpg', 'shraddha3.jpg', 'shraddha4.jpg'];
        var imgarray2 = ['rekha1.jpg', 'rekha2.jpg', 'rekha3.jpg', 'rekha4.webp'];
        var imgarray3 = ['tabu1.jpg', 'tabu22.jpg', 'tabu3.jpg', 'Tabu.webp'];
        var imgarray4 = ['amisha1.jpg', 'amisha2.webp', 'amisha3.jpg', 'amisha4.webp'];
        var i = 0;

        function newgirl()
        {
            var girlname = document.getElementById('name');
            var para1 = document.getElementById('para1');
            var para2 = document.getElementById('para2');
            var img = document.getElementById('image');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var cross = document.getElementById('cross');
            var heart = document.getElementById('heart');
            var tick = document.getElementById('tick');
            cross.onclick = newgirl2;
            heart.onclick = newgirl2;
            tick.onclick = newgirl2;
            prev.onclick = prev2;
            next.onclick = next2;
            img.src = 'rekha1.jpg';
            girlname.innerHTML = "Rekha, 68";
            para1.innerHTML = "I have a deep appreciation for music, art, and culture, and I'm always looking for new experiences and adventures." +
            "I value honesty, authenticity, and kindness in others, and I believe that laughter is the best medicine.";
            para2.innerHTML = "I'm looking for someone who shares my interests and values, who is confident, supportive, and has a positive outlook on life." +
            "Let's grab a cup of coffee and get to know each other better!";

        }

        function newgirl2()
        {
            var girlname = document.getElementById('name');
            var para1 = document.getElementById('para1');
            var para2 = document.getElementById('para2');
            var img = document.getElementById('image');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var cross = document.getElementById('cross');
            var heart = document.getElementById('heart');
            var tick = document.getElementById('tick');
            cross.onclick = newgirl3;
            heart.onclick = newgirl3;
            tick.onclick = newgirl3;
            prev.onclick = prev3;
            next.onclick = next3;
            img.src = 'tabu1.jpg';
            girlname.innerHTML = "Tabu, 51";
            para1.innerHTML = "Hi there, I'm Tabu! I'm an actress from Mumbai and I love what I do. When I'm not filming or attending events, you can find me " +
            "exploring new places, trying new foods, and enjoying nature. I'm also a big fan of yoga and meditation, which help me stay centered and grounded.";
            para2.innerHTML = "I'm a kind and compassionate person, and I value honesty, loyalty, and humor in people. I'm looking for someone who is " +
            "passionate about their work, loves to explore new places and cultures, and shares my interest in personal growth and spirituality.";

        }

        function newgirl3()
        {
            var girlname = document.getElementById('name');
            var para1 = document.getElementById('para1');
            var para2 = document.getElementById('para2');
            var img = document.getElementById('image');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var cross = document.getElementById('cross');
            var heart = document.getElementById('heart');
            var tick = document.getElementById('tick');
            cross.onclick = newgirl4;
            heart.onclick = newgirl4;
            tick.onclick = newgirl4;
            prev.onclick = prev4;
            next.onclick = next4;
            img.src = 'amisha1.jpg';
            girlname.innerHTML = "Ameesha Patel, 46";
            para1.innerHTML = "I have a deep appreciation for music, art, and culture, and I'm always looking for new experiences and adventures." +
            "I value honesty, authenticity, and kindness in others, and I believe that laughter is the best medicine.";
            para2.innerHTML = "I'm looking for someone who shares my interests and values, who is confident, supportive, and has a positive outlook on life." +
            "Let's grab a cup of coffee and get to know each other better!";
        }

        function newgirl4()
        {
            var girlname = document.getElementById('name');
            var para1 = document.getElementById('para1');
            var para2 = document.getElementById('para2');
            var img = document.getElementById('image');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var cross = document.getElementById('cross');
            var heart = document.getElementById('heart');
            var tick = document.getElementById('tick');
            cross.onclick = newgirl;
            heart.onclick = newgirl;
            tick.onclick = newgirl;
            prev.onclick = prev1;
            next.onclick = next1;
            img.src = 'shraddha.jpg';
            girlname.innerHTML = "Shraddha Kapoor, 36";
            para1.innerHTML = "Hey there, I'm Shraddha! I'm an actress and singer based in Mumbai. When I'm not working, you can find me" +
            " practicing yoga, reading a good book, or trying out new recipes in the kitchen.I'm a big foodie and love trying out new cuisines and restaurants.";
            para2.innerHTML = "I also enjoy spending time with my family and friends, and exploring the beautiful nature spots around Mumbai."+
            "I'm a very positive and open-minded person, and I value honesty, kindness, and humor in people." +
            "I'm looking for someone who is passionate about their work, has a good sense of humor, and is also interested in exploring new things together." +
            "Let's grab a cup of chai and see where things go!";
        }

        function next1()
        {
            var img = document.getElementById('image');
            if (i >= imgarray.length-1)
            {
                i = -1;
            }
            i++
           return img.src = imgarray[i];
        }

        function prev1()
        {
            var img = document.getElementById('image');
            if (i <= 0)
            {
                i = imgarray.length;
            }
            i--
           return img.src = imgarray[i];
        }

        function next2()
        {
            var img = document.getElementById('image');
            if (i >= imgarray2.length-1)
            {
                i = -1;
            }
            i++
           return img.src = imgarray2[i];
        }

        function prev2()
        {
            var img = document.getElementById('image');
            if (i <= 0)
            {
                i = imgarray2.length;
            }
            i--
           return img.src = imgarray2[i];
        }    

        function next3()
        {
            var img = document.getElementById('image');
            if (i >= imgarray3.length-1)
            {
                i = -1;
            }
            i++
           return img.src = imgarray3[i];
        }

        function prev3()
        {
            var img = document.getElementById('image');
            if (i <= 0)
            {
                i = imgarray3.length;
            }
            i--
           return img.src = imgarray3[i];
        }    

        function next4()
        {
            var img = document.getElementById('image');
            if (i >= imgarray4.length-1)
            {
                i = -1;
            }
            i++
           return img.src = imgarray4[i];
        }

        function prev4()
        {
            var img = document.getElementById('image');
            if (i <= 0)
            {
                i = imgarray4.length;
            }
            i--
           return img.src = imgarray4[i];
        }    

        function checkPasswords() 
        {
            var new1 = document.getElementById('new1').value;
            var newconf = document.getElementById('newconf').value;
            if (new1 === newconf) 
            {
              alert('Passwords match');
              alert('Changes have been made');
            } 
            else 
            {
              alert("Passwords don't match");
              alert('No changes have been made');
            }
          }
          