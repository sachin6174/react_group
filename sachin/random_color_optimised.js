
      function getColor() {
        let colorObj = {
          10: 'A',
          11: 'B',
          12: 'C',
          13: 'D',
          14: 'E',
          15: 'F',
        };

        let rand1 = Math.floor(Math.random() * 16);
        let rand2 = Math.floor(Math.random() * 16);
        let rand3 = Math.floor(Math.random() * 16);
        let rand4 = Math.floor(Math.random() * 16);
        let rand5 = Math.floor(Math.random() * 16);
        let rand6 = Math.floor(Math.random() * 16);

        
        if (rand1 >= 10) {
          rand1 = colorObj[rand1];
        }
        if (rand2 >= 10) {
          rand2 = colorObj[rand2];
        }
        if (rand3 >= 10) {
          rand3 = colorObj[rand3];
        }
        if (rand4 >= 10) {
          rand4 = colorObj[rand4];
        }
        if (rand5 >= 10) {
          rand5 = colorObj[rand5];
        }
        if (rand6 >= 10) {
          rand6 = colorObj[rand6];
        }
        return `#${rand1}${rand2}${rand3}${rand4}${rand5}${rand6}`;
      }

      console.log(getColor())