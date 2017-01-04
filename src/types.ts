export const allTypes = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']  

export const mappedPkmnTypes = {
  'normal': [16, 17, 18, 19, 20, 21, 22, 39, 40, 52, 53, 83, 84, 85, 108, 113, 115, 128, 132, 133, 137, 143, 161, 162, 163, 164, 174, 190, 203, 206, 216, 217, 233, 234, 235, 241, 242, 263, 264, 276, 277, 287, 288, 289, 293, 294, 295, 298, 300, 301, 327, 333, 335, 351, 352, 396, 397, 398, 399, 400, 424, 427, 428, 431, 432, 440, 441, 446, 463, 474, 486, 493, 504, 505, 506, 507, 508, 519, 520, 521, 531, 572, 573, 585, 586, 626, 627, 628, 648, 659, 660, 661, 667, 668, 676, 694, 695],
  'fighting': [56, 57, 62, 66, 67, 68, 106, 107, 214, 236, 237, 256, 257, 286, 296, 297, 307, 308, 391, 392, 447, 448, 453, 454, 475, 499, 500, 532, 533, 534, 538, 539, 559, 560, 619, 620, 638, 639, 640, 647, 652, 674, 675, 701],
  'flying': [6, 12, 16, 17, 18, 21, 22, 41, 42, 83, 84, 85, 123, 130, 142, 144, 145, 146, 149, 163, 164, 165, 166, 169, 176, 177, 178, 187, 188, 189, 193, 198, 207, 225, 226, 227, 249, 250, 267, 276, 277, 278, 279, 284, 291, 333, 334, 357, 373, 384, 396, 397, 398, 414, 415, 416, 425, 426, 430, 441, 458, 468, 469, 472, 519, 520, 521, 527, 528, 561, 566, 567, 580, 581, 587, 627, 628, 629, 630, 641, 642, 645, 661, 662, 663, 666, 701, 714, 715, 717],
  'poison': [1, 2, 3, 13, 14, 15, 23, 24, 29, 30, 31, 32, 33, 34, 41, 42, 43, 44, 45, 48, 49, 69, 70, 71, 72, 73, 88, 89, 92, 93, 94, 109, 110, 167, 168, 169, 211, 269, 315, 316, 317, 336, 406, 407, 434, 435, 451, 452, 453, 454, 543, 544, 545, 568, 569, 590, 591, 690, 691],
  'ground': [27, 28, 31, 34, 50, 51, 74, 75, 76, 95, 104, 105, 111, 112, 194, 195, 207, 208, 220, 221, 231, 232, 246, 247, 259, 260, 290, 322, 323, 328, 329, 330, 339, 340, 343, 344, 383, 389, 423, 443, 444, 445, 449, 450, 464, 472, 473, 529, 530, 536, 537, 551, 552, 553, 618, 622, 623, 645, 660, 718],
  'rock': [74, 75, 76, 95, 111, 112, 138, 139, 140, 141, 142, 185, 213, 219, 222, 246, 247, 248, 299, 304, 305, 306, 337, 338, 345, 346, 347, 348, 369, 377, 408, 409, 410, 411, 438, 464, 476, 524, 525, 526, 557, 558, 564, 565, 566, 567, 639, 688, 689, 696, 697, 698, 699, 703, 719],
  'bug': [10, 11, 12, 13, 14, 15, 46, 47, 48, 49, 123, 127, 165, 166, 167, 168, 193, 204, 205, 212, 213, 214, 265, 266, 267, 268, 269, 283, 284, 290, 291, 292, 313, 314, 347, 348, 401, 402, 412, 413, 414, 415, 416, 451, 469, 540, 541, 542, 543, 544, 545, 557, 558, 588, 589, 595, 596, 616, 617, 632, 636, 637, 649, 664, 665, 666],
  'ghost': [92, 93, 94, 200, 292, 302, 353, 354, 355, 356, 425, 426, 429, 442, 477, 478, 479, 487, 562, 563, 592, 593, 607, 608, 609, 622, 623, 679, 680, 681, 708, 709, 710, 711, 720],
  'steel': [81, 82, 205, 208, 212, 227, 303, 304, 305, 306, 374, 375, 376, 379, 385, 395, 410, 411, 436, 437, 448, 462, 476, 483, 485, 530, 589, 597, 598, 599, 600, 601, 624, 625, 632, 638, 649, 679, 680, 681, 707],
  'fire': [4, 5, 6, 37, 38, 58, 59, 77, 78, 126, 136, 146, 155, 156, 157, 218, 219, 228, 229, 240, 244, 250, 255, 256, 257, 322, 323, 324, 390, 391, 392, 467, 485, 494, 498, 499, 500, 513, 514, 554, 555, 607, 608, 609, 631, 636, 637, 643, 653, 654, 655, 662, 663, 667, 668, 721], 
  'water': [7, 8, 9, 54, 55, 60, 61, 62, 72, 73, 79, 80, 86, 87, 90, 91, 98, 99, 116, 117, 118, 119, 120, 121, 129, 130, 131, 134, 138, 139, 140, 141, 158, 159, 160, 170, 171, 183, 184, 186, 194, 195, 199, 211, 222, 223, 224, 226, 230, 245, 258, 259, 260, 270, 271, 272, 278, 279, 283, 318, 319, 320, 321, 339, 340, 341, 342, 349, 350, 363, 364, 365, 366, 367, 368, 369, 370, 382, 393, 394, 395, 400, 418, 419, 422, 423, 456, 457, 458, 484, 489, 490, 501, 502, 503, 515, 516, 535, 536, 537, 550, 564, 565, 580, 581, 592, 593, 594, 647, 656, 657, 658, 688, 689, 690, 692, 693, 721],
  'grass': [1, 2, 3, 43, 44, 45, 46, 47, 69, 70, 71, 102, 103, 114, 152, 153, 154, 182, 187, 188, 189, 191, 192, 251, 252, 253, 254, 270, 271, 272, 273, 274, 275, 285, 286, 315, 331, 332, 345, 346, 357, 387, 388, 389, 406, 407, 413, 420, 421, 455, 459, 460, 465, 470, 492, 495, 496, 497, 511, 512, 540, 541, 542, 546, 547, 548, 549, 556, 585, 586, 590, 591, 597, 598, 640, 650, 651, 652, 672, 673, 708, 709, 710, 711],
  'electric': [25, 26, 81, 82, 100, 101, 125, 135, 145, 170, 171, 172, 179, 180, 181, 239, 243, 309, 310, 311, 312, 403, 404, 405, 417, 462, 466, 479, 522, 523, 587, 595, 596, 602, 603, 604, 618, 642, 644, 694, 695, 702],
  'psychic': [63, 64, 65, 79, 80, 96, 97, 102, 103, 121, 122, 124, 150, 151, 177, 178, 196, 199, 201, 202, 203, 238, 249, 251, 280, 281, 282, 307, 308, 325, 326, 337, 338, 343, 344, 358, 360, 374, 375, 376, 380, 381, 385, 386, 433, 436, 437, 439, 475, 480, 481, 482, 488, 494, 517, 518, 527, 528, 561, 574, 575, 576, 577, 578, 579, 605, 606, 648, 655, 677, 678, 686, 687, 720],
  'ice': [87, 91, 124, 131, 144, 215, 220, 221, 225, 238, 361, 362, 363, 364, 365, 378, 459, 460, 461, 471, 473, 478, 582, 583, 584, 613, 614, 615, 646, 698, 699, 712, 713],
  'dragon': [147, 148, 149, 230, 329, 330, 334, 371, 372, 373, 380, 381, 384, 443, 444, 445, 483, 484, 487, 610, 611, 612, 621, 633, 634, 635, 643, 644, 646, 691, 696, 697, 704, 705, 706, 714, 715, 718],
  'dark': [197, 198, 215, 228, 229, 248, 261, 262, 274, 275, 302, 318, 319, 332, 342, 359, 430, 434, 435, 442, 452, 461, 491, 509, 510, 551, 552, 553, 559, 560, 570, 571, 624, 625, 629, 630, 633, 634, 635, 658, 675, 686, 687, 717],
  'fairy': [35, 36, 39, 40, 122, 173, 174, 175, 176, 183, 184, 209, 210, 280, 281, 282, 298, 303, 439, 468, 546, 547, 669, 670, 671, 682, 683, 684, 685, 700, 702, 703, 707, 716, 719]
}