const findLargestPuddle = (heights) => {
    let walls = {};
    let puddles = [];


    for (let i = 0; i < heights.length; i++) {
        let left, right;
        for (let j = i - 1; j >= 0; j--) {
            if (heights[j] > heights[i]) {
                left = j;
            }
        }
        for (let j = i; j < heights.length; j++) {
            if (heights[j] > heights[i]) {
                right = j;
            }
        }

        if ((left === undefined || right === undefined)) {
            if (i === 0 && heights[i] > heights[i + 1]) {
                walls[i] = true;
            } else if (left === undefined && heights[i] <= heights[0]) {

            }

            else if (i === heights.length - 1 && heights[i] > heights[i - 1]) {
                walls[i] = true;
            } else if (right === undefined && heights[i] <= heights[heights.length - 1]) {

            }

            else {
                walls[i] = true;
            }

        }
    }

    let wallsIdx = Object.keys(walls).sort().map(idx => Number(idx));

    if (wallsIdx.length <= 1) {
        return [];
    }

    for (let i = 0; i < wallsIdx.length - 1; i++) {
        let volume = 0;
        let leftWallIsHigher = heights[wallsIdx[i]] > heights[wallsIdx[i + 1]] ? 1 : 0;

        if (leftWallIsHigher) {

            for (let j = wallsIdx[i + 1] - 1; j > wallsIdx[i]; j--) {
                volume += heights[wallsIdx[i + 1]] - heights[j];
            }
            puddles.push([wallsIdx[i], wallsIdx[i + 1], volume])
        } else {
            for (let j = wallsIdx[i] + 1; j < wallsIdx[i + 1]; j++) {
                volume += heights[wallsIdx[i]] - heights[j];
            }
            puddles.push([wallsIdx[i], wallsIdx[i + 1], volume])
        }

    }

    let largest = 0;

    for (let i = 0; i < puddles.length; i++) {
        if (puddles[i][2] > puddles[largest][2]) {
            largest = i;
        }
    }

    puddles[largest][0]++;
    puddles[largest][1]++;

    return puddles[largest];
}

module.exports = findLargestPuddle;